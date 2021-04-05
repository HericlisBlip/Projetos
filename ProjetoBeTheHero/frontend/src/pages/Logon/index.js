import heroes from '../../assets/heroes.png';
import logo from '../../assets/logo.svg';
import './styles.css';
import api from '../../service/api'
import { FiLogIn,} from 'react-icons/fi';
import {Link, useHistory} from 'react-router-dom';
import React, {useState} from 'react';

export default function Logon() {
    const [id, setId] = useState('');
    const history = useHistory();
   async function handleLogin(e){
        e.preventDefault();

        try {
            const response =await api.post('sessions',{id})
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName',response.data.name);

            history.push('/profile');
        } catch (error) {
            alert('Falha no Login, tente novamente.')
        }

    }
    return(
        <div className="logon-container">

            <section className="form">
        <img src={logo} alt="Logotipo Be The Hero "/>
        <form onSubmit={handleLogin} >
            <h1>Faça seu Logon</h1>
            <input 
            placeholder="Sua ID"
            value={id} onChange={e => setId (e.target.value)}
            />
            <button className="button" type="submit" >Entrar</button>
            <Link className="back-link" to="/register">
                <FiLogIn  size={16} color="#E02041"/>
                Não tenho cadastro
            </Link>
        </form>
            </section>

            <img src={heroes} alt="Imagem de doadores se abraçando!"/>
        </div>
    

        );
};