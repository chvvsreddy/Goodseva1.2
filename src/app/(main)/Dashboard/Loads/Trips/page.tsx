import dynamic from "next/dynamic";

const LoadsView = dynamic(() => import("@/app/components/loads/LoadsView"));

export default function TruckView() {
  return (
    <div>
      <LoadsView />
    </div>
  );
}
