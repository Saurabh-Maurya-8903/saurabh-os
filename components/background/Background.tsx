import Aurora from "./Aurora";
import Grid from "./Grid";
import Noise from "./Noise";
import Spotlight from "./Spotlight";

export default function Background() {
  return (
    <>
      <div className="absolute inset-0 bg-[#09090B]" />

      <Aurora />

      <Spotlight />

      <Grid />

      <Noise />
    </>
  );
}