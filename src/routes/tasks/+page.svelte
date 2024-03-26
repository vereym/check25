<script>
	import { addTask, getTaskStore, addSession, getSessionStore } from '$lib/db.js';
    let tasks = getTaskStore();
    let taskName = "";

    async function createTask() {
        if (taskName) {
            addTask(taskName);
            taskName = "";
            tasks = getTaskStore();
        }
    }

    function select(task) {
        return function(event) {
            event.preventDefault();
            selectedTask = task;
        }
    };
  let selectedTask = null;
</script>
<div>
  <fieldset>
    <legend>Add new task</legend>
    <label>
      Name:
      <input
          type="text"
          bind:value={taskName} />
    </label>
    <br />
    <button on:click={createTask}>Add Task</button>
  </fieldset>
</div>
<ul>  
  {#if $tasks}
    {#each $tasks as task (task.id)}
      <li><a href="#" on:click={() => selectedTask = task.id} style={selectedTask === task.id ? 'background: gray' : ''}>{task.name}</a></li>
    {/each}
  {/if}
</ul>