import prisma from '@/lib/client'
import { User } from '@prisma/client'
import Image from "next/image";
import Link from "next/link";

export default async function ProfileMedia({ user }: {
    user?: User
}) {
    const postsWithMedia = await prisma.post.findMany({
        where: {
            userId: user?.id,
            img: {
                not: null,
            },
        },
        take: 8,
        orderBy: {
            createdAt: "desc",
        },
    });

    return (
        <div>
            <div className="flex justify-between items-center">
                <span className="text-[#333333] text-md">
                    User Media
                </span>

                <Link href="/" className="text-[#9146ff] text-xs">
                    See all
                </Link>
            </div>

            <div className="flex gap-2 justify-between flex-wrap">
                {postsWithMedia.length
                    ? postsWithMedia.map((post) => {
                        return (
                            <div className="relative w-1/5 h-12" key={post.id}>
                                <Image
                                    src={post.img!}
                                    alt=""
                                    fill
                                    className="object-cover rounded-md"
                                />
                            </div>
                        )
                    }) :
                    "No media found!"
                }
            </div>
        </div>
    )
}
