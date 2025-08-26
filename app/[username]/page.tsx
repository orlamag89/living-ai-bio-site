import VendorSite from '@/components/VendorSite'

interface VendorPageProps {
  params: {
    username: string
  }
}

export default function VendorPage({ params }: VendorPageProps) {
  return <VendorSite username={params.username} />
}
