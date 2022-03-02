import React, { useState, useEffect } from 'react'

const Convert = ({ language, text }) => {
    useEffect(() => {
        console.log('new language or text')
    }, [language, text])
    return (
        <div> hi mom!</div>
    )
}
export default Convert