class ToDo {
    id: string;
    text: string;

    constructor(toDoText: string){
        this.text = toDoText;
        this.id = new Date().toISOString();
    }
}

export default ToDo;