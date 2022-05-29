import React, { useEffect, useState } from 'react';

const family = [
    {
        "name": "Lekz",
        "age": 32
    },
    {
        "name": "Ranju",
        "age": 30
    },
    {
        "name": "Ritu",
        "age": 3
    }
]

function ReactUseeffect(props) {

    const [keyword, setKeyword] = useState("")
    const [members, setMembers] = useState(family)
    const [log, setLog] = useState("")

        
    const handleSearch = e => {
        setKeyword(e.target.value)
        if(keyword.length === 0){              
            setLog("No record found")
        } 
    }

    const clearSearch = () => {
        if(keyword.length !== 0){ 
            setLog(keyword)
        }
        setKeyword("")
        setMembers(family)
    }

    useEffect(() => {
        const newMembers = members.filter(member => member.name.toLowerCase().includes(keyword.toLowerCase()))
        if(keyword.length === 0){              
            setMembers(family)
        } else {
            setMembers(newMembers)
        }
    },[keyword, members])

    const listMembers = members.map((family, index) => {
        return <li key={index}>{family.name} ({family.age})</li>
    })

    return (
        <>
        <div>
            <input type="text" id="search" value={keyword} onChange={ handleSearch  } /> 
            <p>Recent search: {log}</p>
            <button type='button' onClick={clearSearch}>Clear</button>
        </div>

        <ul>
            { members && listMembers }
        </ul>
        </>
    );
}

export default ReactUseeffect;