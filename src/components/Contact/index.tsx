import React, { FormHTMLAttributes, useEffect, useRef, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import emailjs from '@emailjs/browser'

type Props = {
    refForm: {
        current: any
    }
}

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef<any>(null);

  useEffect(() => {
    return () => {
      setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 4000)
    }
  }, [])

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()

    emailjs
        .sendForm(
            'gmail',
            'template_1ju4mdt',
            refForm.current,
            'service_brrf38i'
        ).then(
            () => {
                alert('Message successfully sent!')
                window.location.reload()
            },
            () => {
                alert('Failed to send the message, please try again')
            }
        )
  }

  return (
    <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['C','o','n','t','a','c','t',' ','m','e']} 
                        idx={15}/>
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dolorem aliquid fugiat similique neque placeat molestias, officia laborum inventore doloribus.
                </p>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type='text' name='name' placeholder='Name' required />
                            </li>
                            <li className='half'>
                                <input type='email' name='email' placeholder='Email' required />
                            </li>
                            <li>
                                <input placeholder="Subject" type="text" name='subject' required/>
                            </li>
                            <li>
                                <textarea placeholder='Message' name='message' required>
                                </textarea>
                            </li>
                            <li>
                                <input type='submit' className='flat-button' value='SEND' />
                            </li>
                        </ul>
                    </form>

                </div>
            </div>
        </div>
        <Loader type='pacman' active />
    </>
  )
}

export default Contact