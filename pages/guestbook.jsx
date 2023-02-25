import { Form } from "@/components";
import { useSession } from "next-auth/react";
import { SignIn, SignOut } from "@/lib/actions";
import { supabase } from "@/lib/supabase";

export default function GuestbookPage({ comments }) {
  const { data: session } = useSession();
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif mb-5">Guestbook</h1>
      {session?.user ? (
        <>
          <Form />
          <SignOut />
        </>
      ) : (
        <SignIn />
      )}
      <div className="my-8">
        {comments.reverse().map((entry) => (
          <div key={entry.id} className="flex flex-col space-y-1 mb-4">
            <div className="w-full text-sm">
              <span className="text-neutral-600 dark:text-neutral-400 mr-1">
                {entry.name}:
              </span>
              {entry.comment}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export async function getServerSideProps(ctx) {
  let { data } = await supabase.from("comments").select();

  return {
    props: {
      comments: data,
    },
  };
}
