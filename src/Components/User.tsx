import React from 'react'

type UserProps = {
  name: string;
  age: number;
  lang: string[];
}

const User = ({name,age,lang}: UserProps) => {
  return (
    <div>
      {name} - {age} years old
      <br />
      <p>
        Speaks:
        {lang.map((item,index)=>{
            return <span key={index}>{item}</span>
        })}
      </p>
    </div>
  )
}

export default User
