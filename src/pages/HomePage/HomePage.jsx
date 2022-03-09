
import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";

import * as TasksAPI from "../../utils/tasksApi";

// import {create, getAll} from '../../utils/postApi'
import { Grid } from "semantic-ui-react";

export default function HomePage({ user }) {
  const [tasks, setTasks] = useState([]); // <- likes are inside of the each post in the posts array
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
 

  // R read in crud
  async function getTasks() {
    try {
      const data = await TasksAPI.getAll();
      console.log(data, " this is data,");
      setTasks([...data.tasks]);
    } catch (err) {
      console.log(err.message, " this is the error");
      setError(err.message);
    }
  }

  // useEffect runs once
  // the component is first rendered (whenever you first view the component)
  // Component Lifecycle in react
  // useEffect(() => {
  //   getTasks();
  // }, []);

  return (
    <Grid centered>
       <Grid.Row>
        <Grid.Column>
          <Header user={user} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
          
      </Grid.Row>
      <Grid.Row>
        <Grid.Column style={{ maxWidth: 450 }}>
          
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
