import React, {useState} from "react";
import {FiArrowLeft} from 'react-icons/fi';

import './styles.css';
import logoImg from "../../assets/logo.svg";
import {Link, useHistory} from "react-router-dom";
import api from '../../services/api'

export default function NewIncident() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const ongId = localStorage.getItem('ongId');
    const history = useHistory();
    async function handleNewIncident(e) {
        e.preventDefault();

        const data = {
            title,
            description,
            value
        }

        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId
                }
            })
            history.push('/profile');

        } catch (e) {
            alert("erro");
        }
    }

    return (
        <div className={"new-incident-container"}>
            <div className={"content"}>
                <section>
                    <img src={logoImg} alt={"Be the hero"}/>

                    <h1>Cadastrar novo caso</h1>
                    <p>Cadastre</p>
                    <Link className={"back-link"} to={"/profile"}>
                        <FiArrowLeft size={16} color={"#e02041"}/>
                        Voltar para home
                    </Link>
                </section>
                <form onSubmit={handleNewIncident}>
                    <input placeholder={"Título do caso"}
                           value={title}
                           onChange={e => setTitle(e.target.value)}/>
                    <textarea placeholder={"Descrição"}
                              value={description}
                              onChange={e => setDescription(e.target.value)}/>
                    <input placeholder={"Valor em reais"}
                           value={value}
                           onChange={e => setValue(e.target.value)}/>
                    <button className={"button"} type={"submit"}>Cadastrar</button>
                </form>
            </div>
        </div>
    )
}
