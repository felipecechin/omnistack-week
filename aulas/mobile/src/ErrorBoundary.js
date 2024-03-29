import React from 'react';

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError(error) {    // Atualiza o state para que a próxima renderização mostre a UI alternativa.

        return {hasError: true};
    }

    render() {
        if (this.state.hasError) {      // Você pode renderizar qualquer UI alternativa
            return <h1>Algo deu errado.</h1>;
        }
        return null;
    }
}
