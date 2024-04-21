"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { useUser } from "@/hooks/useUser";
import Button from "@/components/Button";
import useSubscribeModal from "@/hooks/useSubscribeModal";
import { postData } from "@/libs/helpers";

const AccountContent = () => {
    const router = useRouter();
    const subscribeModal = useSubscribeModal();
    const { isLoading, subscription, user } = useUser();

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!isLoading && !user) {
            router.replace('/');
        }
    }, [isLoading, user, router]);

    const redirectToCustomerPortal = async () => {
        setLoading(true);
        try {
            const { url, error } = await postData({
                url: '/api/create-portal-link'
            });
            window.location.assign(url);
        } catch (error) {
            if (error) return alert((error as Error).message);
        }
        setLoading(false);
    };

    return (
        <div className="mb-7 px-6">
            {!subscription && (
                <div className="flex flex-col gap-y-4">
                    <p>Немає активного плану.</p>
                    <Button
                        onClick={subscribeModal.onOpen}
                        className="w-[300px]"
                    >
                        Оформити підписку
                    </Button>
                </div>
            )}
            {subscription && (
                <div className="flex flex-col gap-y-4">
                    <p>Ви зараз на
                        <b> {subscription?.prices?.products?.name} </b>
                        підписці.
                    </p>
                    <Button
                        disabled={loading || isLoading}
                        onClick={redirectToCustomerPortal}
                        className="w-[300px]"
                    >
                        Інформація про підписку
                    </Button>
                </div>
            )}
        </div>
    );
}

export default AccountContent;