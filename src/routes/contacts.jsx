import { Form } from 'react-router-dom'

export default function Contact() {
  const contact = {
    first: 'Tony',
    last: 'Onejohi',
    avatar: 'https://ui-avatars.com/api/?name=Tony+Onejohi',
    twitter: '@onejohi',
    notes: 'I love myself',
    favorite: true
  }

  return (
    <div id="contact">
      <div>
        <img src={contact.avatar || null} alt={contact.first} key={contact.avatar} />
      </div>

      <div>
        <h1>
          { contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )} {" "}

          <Favorite contact={contact} />
        </h1>

        { contact.twitter && (
          <p>
            <a target='__blank' href={`https://twitter.com/${contact.twitter}`}>
              {contact.twitter}
            </a>
          </p>
        )}

        {contact.notes && <p>{contact.notes}</p>}

        <div>
          <Form action='edit'>
            <button type='submit'>Edit</button>
          </Form>

          <Form method='POST' action='destroy' onSubmit={(event) => {
            if (!confirm("Please confirm you want to delete this record.")) {
              event.preventDefault()
            }
          }} >

            <button type='submit'>Delete</button>

          </Form>
        </div>
      </div>
    </div>
  )
}

function Favorite({contact}) {
  let favorite = contact.favorite

  return (
    <Form method='POST'>
      <button name='favorite' value={favorite ? "false" : "true"} aria-label={favorite ? "Remove from contacts": "Add to contacts"}>
        {favorite ? '*' : '*+'}
      </button>
    </Form>
  )
}