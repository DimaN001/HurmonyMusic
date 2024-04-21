import React, { useEffect } from 'react';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { 
  useSessionContext, 
  useSupabaseClient
} from '@supabase/auth-helpers-react';
import { useRouter } from 'next/navigation';

import useAuthModal from "@/hooks/useAuthModal";

import Modal from './Modal';
import AuthModalLocalization from "./AuthModalLocalization"


const AuthModal = () => {
  const { session } = useSessionContext();
  const router = useRouter();
  const { onClose, isOpen } = useAuthModal();
  
  const supabaseClient = useSupabaseClient();

  useEffect(() => {
    if (session) {
      router.refresh();
      onClose();
    }
  }, [session, router, onClose]);

  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  }

  return (
    <Modal 
      title="Ласкаво просимо!" 
      description="ВХІД" 
      isOpen={isOpen} 
      onChange={onChange} 
    >
      <Auth
        supabaseClient={supabaseClient}
        providers={['github','discord']}
        magicLink={true}
        localization={{
          variables: AuthModalLocalization
        }}
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                brand: '#404040',
                brandAccent: '#0000FF'
              }
            }
          }
        }}
        theme="dark"
      />
    </Modal>
  );
}

export default AuthModal;
