import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import FriendRequestList from "./FriendRequestList";

const FriendRequests = async () => {
  const { userId } = await auth();

  if (!userId) return null;

  const requests = await prisma.followRequest.findMany({
    where: {
      receiverId: userId,
    },
    include: {
      sender: true,
    },
  });

  if (requests.filter((rq)=>rq.senderId!==userId).length === 0) return null;

  const user = await prisma.user.findFirst({
    where: {
      id: userId
    },
    include: {
      _count: {
        select: {
          followers: true
        }
      }
    }
  })

  if (!user) {
    return null;
  }

  console.log('bebo', requests)
  return (
    <div className="p-4 bg-white rounded-xl shadow-lg text-sm flex flex-col gap-4 mb-4">
      <div className="flex items-center justify-between text-[#333333] font-medium">
        <span>Friend Requests</span>

        <Link href={`/peoples/${user.username}`} className="text-[#9146ff]">
          See all
        </Link>
      </div>

      <FriendRequestList requests={requests} />
    </div>
  );
};

export default FriendRequests;
