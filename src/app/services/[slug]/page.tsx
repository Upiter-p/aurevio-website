import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePageView } from "@/components/services/service-page";
import { getServicePage, resolveServiceLocale, servicePageSlugs } from "@/components/services/service-pages";

type ServiceRouteParams = {
  slug: string;
};

type ServicePageProps = {
  params: Promise<ServiceRouteParams>;
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export function generateStaticParams(): ServiceRouteParams[] {
  return servicePageSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getServicePage(slug);

  if (!page) {
    return {};
  }

  const path = `/services/${page.slug}`;

  return {
    title: page.metadataTitle,
    description: page.description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      url: path,
      siteName: "AurevioPro",
      title: page.metadataTitle,
      description: page.description,
    },
    twitter: {
      card: "summary_large_image",
      title: page.metadataTitle,
      description: page.description,
    },
  };
}

export default async function ServicePage({ params, searchParams }: ServicePageProps) {
  const { slug } = await params;
  const query = searchParams ? await searchParams : {};
  const page = getServicePage(slug);

  if (!page) {
    notFound();
  }

  return <ServicePageView page={page} locale={resolveServiceLocale(query.lang)} />;
}
