import {useState} from "react"

export function Trabajo() {
    const [abierto, setAbierto] = useState<boolean>(false);
    const cambiar = () => {
        setAbierto(!abierto);
    };

    return(
        <div>
            <button onClick={cambiar} className="bg-purple-500 p-2">
                Cambiar
            </button>
            {abierto ? (
                <div className="text-5xl text-lime-500">Abierto</div>

            ) : (
                <div className="text-5xl text-red-500">Cerrado</div>
            )}
        </div>
    );

    
    return (
        <div className="text-5xl text-red-500">
            Cambiar
        </div>
    )
}