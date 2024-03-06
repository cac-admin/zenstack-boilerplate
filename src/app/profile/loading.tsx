import Spinner from "../components/Spinner";

export default function Loading() {
    return (
        <div className="w-max h-max flex items-center">
            <Spinner className="w-6 h-6 place-self-center" />
        </div>
    );
}
