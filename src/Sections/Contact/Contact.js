import { Button, Card, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useState } from 'react'
import { writeMessage } from '../../util/firebase'

import './Contact.css'

const useStyles = makeStyles({
  contact__input: {
    marginBottom: '2rem',
    width: '80vw',
    maxWidth: '360px',
    fontFamily: `'Poppins'`,
    fontSize: 'var(--normal-font-size)',
    fontWeight: 'var(--font-semi)',
    borderRadius: '0.5rem',
  },
  contact__button: {
    float: 'right',
    fontFamily: `'Poppins'`,
    fontWeight: 'var(--font-semi)',
    fontSize: 'var(--normal-font-size)',
    textTransform: 'none',
    backgroundColor: 'var(--first-color) !important',
    color: '#fff',
    padding: '0.75rem 2.5rem',
    borderRadius: '0.5rem',
  },
})

const Contact = () => {
  const classes = useStyles()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')

  const onSubmit = (event) => {
    event.preventDefault()
    writeMessage(name, email, msg)
      .then(() => {
        alert('We have received your message and try to get back to you ASAP!!')
        setName('')
        setEmail('')
        setMsg('')
        document.getElementById('contact_form').reset()
      })
      .catch((err) => console.log(err))
  }
  return (
    <section className="contact section" id="contact">
      <h2 className="section-title">Contact</h2>

      <Card className="contact__container">
        <form className="contact__form" id="contact_form">
          <TextField
            label="Name"
            variant="filled"
            className={classes.contact__input}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            type="mail"
            label="Email"
            variant="filled"
            className={classes.contact__input}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="filled"
            label="Message"
            multiline
            rows={10}
            className={classes.contact__input}
            onChange={(e) => setMsg(e.target.value)}
          />
          <Button
            variant="contained"
            className={classes.contact__button}
            color="primary"
            onClick={onSubmit}
          >
            Submit
          </Button>
        </form>
      </Card>
    </section>
  )
}

export default Contact
