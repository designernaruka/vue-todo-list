let todos = [
{
  name:"First Row",
  complete: false,
},{
  name:"Second Row",
  complete: true
},{
  name: "Third Row",
  complete: false
},{
  name: "Four Row",
  complete: false
}
];

new Vue({
    el:`#app`,
    template:"#app-template",
    data:()=>(
        {
          todos,
          text:``,
          showComplete:true,
        }
    ),
    computed:{
      filteredTodos(){
        return this.todos
          .filter(todo=>this.showComplete ? true : !todo.complete);
      },
      submitIsDisabled(){
        return this.text == "";
      }
    },
    methods:{
      addTodo(){
        todos.push({
          name:this.text,
          complete:false
        });
        this.text = ``;
      },
    }
});
