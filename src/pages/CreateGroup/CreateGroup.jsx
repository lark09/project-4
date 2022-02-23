import React, { useState } from 'react';

import { Button, Form, Grid, Header, Image,  Segment } from 'semantic-ui-react'

export default function CreateGroupForm(props){
  const [selectedFile, setSelectedFile] = useState('')
  const [state, setState] = useState({
    name: ''
  })

  

  function handleFileInput(e){
    setSelectedFile(e.target.files[0])
  }


  function handleChange(e){
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e){
    e.preventDefault()
             
    const formData = new FormData()
    formData.append('photo', selectedFile); // this key matches the key in multer in the 
	// routes/api/posts create route upload.single('photo')
    formData.append('name', state.name)
   
	props.handleCreateGroup(formData)
    // Have to submit the form now! We need a function!
  }


  return (
    
    <Grid textAlign='center' verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Segment>
        
            <Form  autoComplete="off" onSubmit={handleSubmit}>
            
              <Form.Input
                  className="form-control"
                  name="name"
                  value={state.name}
                  placeholder="Super Cool Group Name"
                  onChange={handleChange}
                  required
              />   
              <Form.Input
                className="form-control"
                type="file"
                name="photo"
                placeholder="upload a group icon!"
                onChange={handleFileInput}
              />   
              <Button
                type="submit"
                className="btn"
              >
                Create Group
              </Button>
            </Form>
          </Segment>
      </Grid.Column>
    </Grid>
   
  ); 
}



