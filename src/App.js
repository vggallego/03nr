import React, {Component, Fragment} from 'react';
import Header from './componets/Header'
import ListaNoticias from './componets/ListaNoticias'

class App extends Component {
  state = { 
    noticias: []
   }

  componentDidMount() {
    this.consultarNoticias();
  }

  consultarNoticias = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=mx&apiKey=53a2485bb1ed44f3acdfe7f6694c0351`;

    const respuesta = await fetch (url);
    const {articles: noticias} = await respuesta.json();

    this.setState({
      noticias
    })
    console.log(noticias);
  }

  render() { 
    return ( 
      <Fragment>
        <Header 
          titulo='Noticias React API'
        />
        <div className="container white contenedor-noticias">
          <ListaNoticias 
            noticias={this.state.noticias}
          />
        </div>
      </Fragment>
    );
  }
}
 
export default App;
