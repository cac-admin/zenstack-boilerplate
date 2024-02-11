import { getServerAuthSession } from "~/server/auth";
import CodeUploader from "~/app/components/forms/CodeUploader";

export default async function Uploader() {
    const session = await getServerAuthSession();

    if (session?.user) {
        return (
            <div>
                <CodeUploader />
            </div>
        );
    } else {
        return (
            <p>Please sign in to upload code.</p>
        );
    }
}

