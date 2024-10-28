import { baseRoutes } from "@/constants/routes";
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
    
    if (!link) return redirect(baseRoutes.home);


    const click = await prisma.click.create({
      data: {
        linkId: link.id,
      },
    });

    return redirect(link.url)
  }
