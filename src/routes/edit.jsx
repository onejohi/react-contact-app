import { Form, useLoaderData, redirect } from 'react-router-dom'
import { updateContact } from '../contacts'

export async function action({request, params}) {
  const formData = await request.formData()
  const updates = Object.fromEntries(formData)
  await updateContact(params.contactId, updates)
  return redirect(`/contacts/${params.contactId}`)
}

export default function EditContact() {
  const { contact } = useLoaderData()

  return (
    <Form method='post' id="contact-form">
      <p>
        <span>Name</span>
        <input type="text" placeholder='First name' name='first' defaultValue={contact.first} />
        <input type="text" placeholder='Last name' name='last' defaultValue={contact.last} />
      </p>

      <label>
        <span>Twitter</span>
        <input type="text" placeholder='Twitter handle' name='twitter' defaultValue={contact.twitter} />
      </label>

      <label>
        <span>Avatar URL</span>
        <input type="text" placeholder='https://twitter.com/onejohi' name='avatar' defaultValue={contact.avatar} />
      </label>

      <label>
        <span>Notes</span>
        <textarea type="text" placeholder='Notes' name='notes' rows={6} defaultValue={contact.notes} />
      </label>

      <p>
        <button type='submit'>Save</button>
        <button type='button'>Cancel</button>
      </p>
    </Form>
  )
}