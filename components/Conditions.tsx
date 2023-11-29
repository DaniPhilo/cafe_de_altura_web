import Check from "@/assets/Check.svg"
import Truck from "@/assets/Truck.svg"
import Gift from "@/assets/Gift.svg"
import ConditionCard from "./ConditionCard"


const Conditions = () => {
    return (
        <div className="conditions-container flex flex-col items-center gap-6 py-12 bg-cover bg-center">
            <h2 className="text-subtitle text-custom-white text-center">Café con las mejores condiciones</h2>
            <div className="w-full flex flex-wrap justify-center items-center gap-6">
                <ConditionCard icon={Check} title="Recibe tu pedido sin preocuparte" text="Tienes cosas más importantes en la cabeza, por eso con nuestra suscripción de café, nunca te quedarás sin tu taza de la mañana." />
                <ConditionCard icon={Truck} title="Envío en 24/48h" text="Pide tu café antes de las 12h y lo recibirás al día siguiente." />
                <ConditionCard icon={Gift} title="Descuentos y beneficios" text="Cada dos meses, te regalamos una bolsa de un nuevo origen sorpresa, para que lo descubras junto a nosotros." />
            </div>

        </div>
    )
}

export default Conditions