import React from "react";
import autoBind from 'auto-bind';

class NotesInput extends React.Component {

    constructor(props) {
        super(props);
      
        this.state = {
          title: '',
          body: '',
        }
      autoBind(this);
      }

      onTitleChangeEventHandler(event) {
        const { value } = event.target;
        if (value.length <= 50) {
          this.setState(() => {
            return {
              title: event.target.value,
            };
          });
        }
      }

      onBodyChangeEventHandler(event) {
        this.setState(() =>{
            return {
                body: event.target.value,
            }
        })
      }

      onSubmitEventHandler(event) {
        event.preventDefault();
        if (this.state.title.trim() !== '' && this.state.body.trim() !== '') {
            this.props.addNote(this.state);
            this.setState({
                title: '',
                body: ''
            });
        } else {
            alert("Title dan Body catatan tidak boleh kosong!");
        }
    }

    render(){
        return(
            <form className="note-input" onSubmit={this.onSubmitEventHandler}>
                <h2>Buat Catatan</h2>
                {this.state.title.length < 50 ? <p className="note-input__title__char-limit">Sisa Karakter : {50 - this.state.title.length} </p> : <p className="note-input__title__char-limit">karakter tersisa {50 - this.state.title.length} </p>}
                <input className="note-input__title" name="title" type="text" placeholder="ini adalah judul ..." value={this.state.title} onChange={this.onTitleChangeEventHandler}/>
                <textarea className="note-input__body" name="body" placeholder="Tuliskan catatanmu disini ..."  value={this.state.body} onChange={this.onBodyChangeEventHandler}></textarea>
                <button type="submit">Buat</button>
            </form>
        )
    }
}

export default NotesInput;