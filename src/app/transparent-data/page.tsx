import Banner from "@/ui/layout/Banner";
import Breadcrumb from "@/ui/components/breadcrumb/breadcrumb";

export default function IndexPage(){
    const breadcrumbItems=[
        {
            title : "درگاه شفافیت"
        }
    ]
    return (
        <Banner title='درگاه شفافیت'>
            <Breadcrumb items={breadcrumbItems} listClassName='justify-center mx-auto text-center'/>
        </Banner>
    );

}