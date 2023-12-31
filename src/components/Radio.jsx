import { useEffect, useState } from "react";

const Radio = () => {
  const [metadata, setMetadata] = useState(null);

  const fetchMetadata = async () => {
    const icecastMetadataUrl =
      "https://mediapalvelin.northeurope.cloudapp.azure.com:8001/status-json.xsl?mount=/velimah";
    try {
      const response = await fetch(icecastMetadataUrl);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setMetadata(data);
    } catch (error) {
      console.error("Error fetching Icecast metadata:", error);
    }
  };

  useEffect(() => {
    fetchMetadata();
  }, []);

  return (
    <>
      <div className="w-full h-full p-2 mt-4 lg:p-4">
        <div className="bg-fourth flex flex-col m-auto max-w-lg rounded-lg p-3 md:shadow-xl">
          {metadata ? (
            <>
              <h1 className="text-2xl">
                {metadata?.icestats?.source?.server_name}
              </h1>
              <p>{metadata?.icestats?.server_id}</p>
              <p>{metadata?.icestats?.location}</p>
              {metadata.icestats.source ? (
                <p>Nyt soi: {metadata?.icestats?.source?.server_description}</p>
              ) : (
                <p className="text-xl">Radiosta ei tule musiikkia</p>
              )}
            </>
          ) : (
            <p className="text-xl">Ladataan tietoja...</p>
          )}
        </div>
        <div className="flex justify-center max-w-lg m-auto py-4">
          <audio className="w-full" controls>
            <source
              src="https://mediapalvelin.northeurope.cloudapp.azure.com:8001/velimah"
              type="audio/ogg"
            />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </>
  );
};
export default Radio;
