import { useRouter } from "next/router";
import { useEffect } from "react";
import { CreditCard, Layout, PaymentForm, Typography } from "../src/components";
import { usePlan } from "../src/data/plan/usePlan";

function FormPaymentPage() {
  const { selectedPlan } = usePlan();
  const router = useRouter();
  useEffect(() => {
    if (!selectedPlan.id) router.push("/");
  }, [selectedPlan]);

  return (
    <Layout>
      <Typography variant="h1">Estamos quase lá!</Typography>
      <Typography variant="h2">
        Insira seus dados de pagamento abaixo:
      </Typography>
      <CreditCard />
      <PaymentForm />
    </Layout>
  );
}

export default FormPaymentPage;
