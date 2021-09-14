import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'

// types
export type UserType = {
    _id: string // need to fix any +
    name: string // need to fix any +
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([]) // need to fix any +

    const addUserCallback = (_id: string, name: string) => { // need to fix any +
        setUsers([...users, {_id, name}]) // need to fix +
    }
    console.log(users)

    return (
        <div>
            {/*<hr/>*/}
            Homeworks 3
            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            {/*<hr/>*/}
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    )
}

export default HW3
