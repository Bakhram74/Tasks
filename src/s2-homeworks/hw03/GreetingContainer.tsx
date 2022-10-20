import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3'

type callBack = (value:string)=>void

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: callBack// need to fix any
}

export const pureAddUser = (name: string, setError:callBack, setName:callBack, addUserCallback:callBack)=>{
    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
    if(name.trim() === ''){
        setError('Ошибка! Введите имя!')
    }else if(parseInt(name).valueOf() || name === '0'){
        setName( '')
        addUserCallback(name)
    }
    else {
      setName(name)
        addUserCallback(name)
    }
}

export const pureOnBlur = (name: string, setError:callBack) => { // если имя пустое - показать ошибку
    name.trim().length === 0 ? setError('Ошибка! Введите имя!'):setError('')
}

export const pureOnEnter = (e:KeyboardEvent<HTMLInputElement> , addUser: ()=>void)=>{ // если нажата кнопка Enter - добавить
    if (e.key === 'Enter'){
       addUser()
    }
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
    users,
    addUserCallback,
}) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e:ChangeEvent<HTMLInputElement>) =>{ // need to fix any
        setName(e.currentTarget.value) // need to fix

        error && setError('')
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
        setName('')
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        pureOnEnter(e, addUser)
    }

    const totalUsers = users.length // need to fix
  let  lastUserName = users[users.length -1]?.name // need to fix
    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
