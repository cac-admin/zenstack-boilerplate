import Spinner from "~/app/components/Spinner";

export default function Loading() {
    return (
        <div className="container w-full flex flex-row justify-center">
            <Spinner className="w-6 h-6 place-self-center" />
        </div>
    );
}
