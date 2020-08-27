import {useEffect, useState} from "react";
import db from "../firebase";

// Gets all the rooms
export const useRoomName = (roomId) => {
    const [roomName, setRoomName] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (roomId) {
            db.collection('rooms').doc(roomId)
                .onSnapshot(snapshot => (
                    setRoomName(snapshot.data()?.name)
                ))
            setLoading(false)
        }
    }, [roomId])
    return [roomName, loading] // in case we want to integrate a spinner
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