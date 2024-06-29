# Birthday Greetings Kata

Questo progetto è una soluzione al "Birthday Greetings Kata" descritto qua [blog post](https://matteo.vaccari.name/blog/archives/154). L'obiettivo è creare un programma che invii email di auguri di compleanno agli impiegati.

## Descrizione del Progetto

Il progetto carica i dati degli impiegati da un file JSON e invia email di auguri a coloro il cui compleanno è oggi. La struttura del progetto è stata realizzata seguendo i principi di iniezione di dipendenze e separazione delle responsabilità, con una chiara distinzione tra la logica di business e l'infrastruttura. 

### Funzionalità Principali

- Caricamento dei dati degli impiegati da un file JSON.
- Invio di email di auguri di compleanno. L'invio al momento è simulato con console.log()
- Gestione dei compleanni il 29 febbraio.

### Architettura

Il progetto è strutturato per essere modulare e testabile. I principali componenti includono:

- **Models:** Definiscono la struttura dei dati utilizzati.
- **Service:** Contengono la logica di business per la gestione degli impiegati e l'invio delle email.
- **Utils:** Funzioni di supporto per la gestione delle date e delle email.

## Installazione

Per installare le dipendenze del progetto, eseguire il seguente comando:

```bash
yarn install
```

Per avviare i test:

```bash
yarn test
```

Per avviare il progetto:
```bash
yarn start
```
