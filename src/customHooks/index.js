import React, {useEffect, useState} from "react";
import db from "../firebase";


export const useRooms = (roomId) => {
    const [rooms, setRooms] = useState(null)

    useEffect(() => {
        if (roomId) {
            db.collection('rooms').doc(roomId)
                .onSnapshot(snapshot => (
                    setRooms(snapshot.data()?.name)
                ))
        }
    }, [roomId])
    return rooms
}

export const useMessages = (roomId) => {
    const [messages, setMessages] = useState([])

    useEffect(() => {
        if (roomId) {
            db.collection('rooms').doc(roomId)
                .collection('messages').orderBy('created', 'asc')
                .onSnapshot(snapshot => (
                    setMessages(snapshot.docs.map(doc => doc.data()))
                ))
        }
    }, [roomId])

    return messages
}