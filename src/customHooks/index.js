import React, {useEffect, useState} from "react";
import db from "../firebase";

// Gets all the rooms
export const useRooms = (roomId) => {
    const [rooms, setRooms] = useState([])

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

// Gets all the messages of
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

export const useLatestMessage = (id) => {
    const [messages, setMessages] = useState([])

    useEffect(() => {
        if (id) {
            db.collection('rooms').doc(id).collection('messages')
                .orderBy('created', 'desc').onSnapshot(snapshot => (
                setMessages(snapshot.docs.map((doc) => (
                    doc.data()
                )))))
        }
    }, [id])

    return messages[0]
}