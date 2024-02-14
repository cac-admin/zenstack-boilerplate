import { getServerAuthSession } from "~/server/auth";
import CodeUploadForm from "~/app/components/CodeUploadForm";

export default async function Uploader() {
    const session = await getServerAuthSession();

    if (session?.user) {
        return (
            <div>
                <CodeUploadForm />
            </div>
        );
    } else {
        return (
            <p>Please sign in to upload code.</p>
        );
    }
}

