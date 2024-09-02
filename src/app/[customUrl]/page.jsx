import { routes } from "@/constants/routes";
import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";


export default async function CustomUrlPage(props) {
    const { params } = props;
    const prisma = new PrismaClient();
    const link = await prisma.link.findUnique({
      where: {
        customUrl: params.customUrl,
      },
      select: {
        url: true,
        id: true,
      },
    });
    
    if (!link) return redirect(301, routes.home);

    const click = await prisma.click.create({
      data: {
        linkId: link.id,
      },
    });

    console.log("click", click);

    return redirect(link.url)
  }
