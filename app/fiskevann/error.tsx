"use client"
type FeilSideProps = {
    retry: () => void;
};

export default function FiskevannFeil(props:FeilSideProps) {
    return(
        <div>
            <h1>Kunne ikke finne fiskevann.</h1>
            <p>Noe gikk galt, prøv igjen om litt.</p>
            <button onClick={() => props.retry()}>Prøv igjen</button>
        </div>
    );
}