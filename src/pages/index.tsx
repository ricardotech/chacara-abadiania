import Head from "next/head";
import {
  Button,
  Flex,
  Icon,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useUtils } from "@/contexts/UtilsContext";

import { FiClock, FiCompass, FiStar, FiUmbrella } from "react-icons/fi";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaBridgeWater, FaLandmark, FaLandmarkFlag } from "react-icons/fa6";
import { BiHome, BiWater } from "react-icons/bi";
import { BsTreeFill, BsTruck, BsWhatsapp } from "react-icons/bs";
import { PiBoot } from "react-icons/pi";
import { GiPlantRoots } from "react-icons/gi";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Script from "next/script";

export default function Home() {
  const { dimensions } = useUtils();

  const router = useRouter();

  const [activeImage, setActiveImage] = useState("");

  const ImageList = () => {
    // Número total de imagens que você deseja renderizar
    const totalImages = 11;

    // Array para armazenar os elementos de imagem
    const imageElements = [];

    // Loop para criar os elementos de imagem e adicioná-los ao array
    for (let i = 1; i <= totalImages; i++) {
      const imageName = `image${i}.jpeg`;
      const imageURL = `/${imageName}`; // Substitua pelo caminho real das suas imagens

      imageElements.push(
        <Image
          onClick={() => {
            setActiveImage(imageURL);
          }}
          cursor="pointer"
          borderRadius={10}
          mr="20px"
          key={i}
          src={imageURL}
          alt={`Imagem ${i}`}
          objectFit="cover"
          h="50vh"
        />
      );
    }

    return (
      <Flex mt="20px" w="100%">
        {imageElements}
      </Flex>
    );
  };

  useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init("757900815722061"); // facebookPixelId
        ReactPixel.pageView();

        router.events.on("routeChangeComplete", () => {
          ReactPixel.pageView();
        });
      });
  }, [router.events]);

  return (
    <>
      <Head>
        <Script id="facebook-pixel">
          {`
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '757900815722061');
      fbq('track', 'PageView');
      `}
        </Script>
        <title>🌾 Excelente oportunidade!</title>

        <meta
          name="description"
          content="Excelente Oportunidade de Chacara À Venda em Abadiania - GO"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
        flexDir="column"
        bg="#EEE"
        minH="100vh"
        maxW="1400px"
        mx="auto"
        w="100%"
      >
        <Flex
          h="80px"
          position="fixed"
          bg="#EFEFEF"
          w="100%"
          mx="auto"
          maxW="1400px"
          boxShadow="rgba(0, 0, 0, 0.1) 0 0 10px"
          justify="space-between"
          borderRadius={8}
          align="center"
          px="20px"
        >
          <Text fontSize={dimensions.isDesktop ? "1.5rem" : "1rem"}>
            Chácara em Abadiânia
          </Text>
          {dimensions.isMobile ? (
            <Button
              onClick={() => {
                router.push("https://wa.me/5562981268480");
              }}
              maxW="sm"
              size={dimensions.isDesktop ? "md" : "sm"}
              fontSize={dimensions.isDesktop ? "md" : "sm"}
            >
              Entre em contato
            </Button>
          ) : (
            <Button
              onClick={() => {
                router.push("https://wa.me/5562981268480");
              }}
              maxW="sm"
              size={dimensions.isDesktop ? "md" : "sm"}
              fontSize={dimensions.isDesktop ? "md" : "sm"}
            >
              Entre em contato com o proprietário
            </Button>
          )}
        </Flex>
        <Flex h="80px" />
        <Flex
          minH="calc(100vh - 140px)"
          align={dimensions.isDesktop ? "center" : "flex-start"}
          justify="center"
          p="20px"
          flexDir={dimensions.isDesktop ? "row" : "column"}
        >
          <Flex
            flexDir="column"
            pb="20px"
            w={dimensions.isDesktop ? "auto" : "100%"}
          >
            <Text
              fontSize={dimensions.isDesktop ? "3.5rem" : "2rem"}
              fontWeight="bold"
              textAlign="center"
            >
              Excelente oportunidade 🐂
            </Text>
            <Text
              mt="10px"
              textAlign="center"
              color="#555"
              fontSize={dimensions.isDesktop ? "1.5rem" : "1.3rem"}
            >
              Água de Córrego, Terra Fértil e Localização Perfeita!
            </Text>
            {dimensions.isDesktop ? (
              <Button
                onClick={() => {
                  router.push("https://wa.me/5562981268480");
                }}
                mx="auto"
                mt="20px"
                px="40px"
                maxW="sm"
              >
                Entre em contato com o proprietário
              </Button>
            ) : (
              <Button
                onClick={() => {
                  router.push("https://wa.me/5562981268480");
                }}
                mx="auto"
                mt="20px"
                px="40px"
                maxW="sm"
              >
                {dimensions.isMobile
                  ? "Entre em contato"
                  : "Entre em contato com o proprietário"}
              </Button>
            )}
          </Flex>
          <Image
            mt={dimensions.isDesktop ? 0 : "20px"}
            ml={dimensions.isDesktop ? "40px" : 0}
            src="/image2.jpeg"
            objectFit="cover"
            w={dimensions.isDesktop ? "40%" : "100%"}
            h="50vh"
            borderRadius={20}
          />
        </Flex>

        <SimpleGrid px="20px" columns={[1, 2, 2, 3]} w="100%" gap="20px">
          {/* Área Total */}
          <Flex
            border="1px solid #E0E0E0"
            p="20px"
            borderRadius={20}
            justify="center"
            align="center"
            flexDir="column"
          >
            <Text fontSize="1.5rem" fontWeight="bold" textAlign="center">
              344.000m²
            </Text>
            <Text textAlign="center" color="#555">
              Área total
            </Text>
          </Flex>
          {/* Dimensões do Imóvel */}
          <Flex
            border="1px solid #E0E0E0"
            p="20px"
            borderRadius={20}
            justify="center"
            align="center"
            flexDir="column"
          >
            <Text fontSize="1.5rem" fontWeight="bold" textAlign="center">
              34,4375 hectares
            </Text>
            <Text textAlign="center" color="#555">
              Dimensões do imóvel
            </Text>
          </Flex>
          {/* Benefícios do Imóvel */}
          {/* Garantia Legal */}

          <Flex
            border="1px solid #E0E0E0"
            p="20px"
            borderRadius={20}
            justify="center"
            align="center"
            flexDir="column"
          >
            <Text fontSize="1.5rem" fontWeight="bold" textAlign="center">
              Documentação
            </Text>
            <Text textAlign="center" mt="5px" color="#555">
              <span style={{ fontWeight: "bold" }}>CCIR, CAR e ITR.</span>{" "}
              Imóvel sem ônus e sem embaraços legais. <br />
            </Text>
          </Flex>
          <Flex
            border="1px solid #E0E0E0"
            p="20px"
            borderRadius={20}
            justify="center"
            align="center"
            flexDir="column"
          >
            <Icon as={BsTruck} color="accent" fontSize="3rem" />
            <Text textAlign="center" fontWeight="bold" color="#333" mt="10px">
              Frente confrontando com <br />
              Rodovia Municipal
            </Text>
          </Flex>
          <Flex
            border="1px solid #E0E0E0"
            p="20px"
            borderRadius={20}
            justify="center"
            align="center"
            flexDir="column"
          >
            <Icon as={BiWater} color="accent" fontSize="3rem" />
            <Text textAlign="center" fontWeight="bold" color="#333" mt="10px">
              Água de córrego em uma divisa lateral
            </Text>
          </Flex>
          <Flex
            border="1px solid #E0E0E0"
            p="20px"
            borderRadius={20}
            justify="center"
            align="center"
            flexDir="column"
          >
            <Icon as={BiHome} color="accent" fontSize="3rem" />
            <Text textAlign="center" fontWeight="bold" color="#333" mt="10px">
              Sede com casa e outras benfeitorias
            </Text>
          </Flex>
          <Flex
            border="1px solid #E0E0E0"
            p="20px"
            borderRadius={20}
            justify="center"
            align="center"
            flexDir="column"
          >
            <Icon as={GiPlantRoots} color="accent" fontSize="3rem" />
            <Text textAlign="center" fontWeight="bold" color="#333" mt="10px">
              Terra fértil (inclusive, com pasto formado)
            </Text>
          </Flex>
          <Flex
            border="1px solid #E0E0E0"
            p="20px"
            borderRadius={20}
            justify="center"
            align="center"
            flexDir="column"
          >
            <Icon as={FiClock} color="accent" fontSize="3rem" />
            <Text textAlign="center" fontWeight="bold" color="#333" mt="10px">
              Distante a 5 minutos do Povoado de Abadiânia Velha
            </Text>
          </Flex>
          <Flex
            border="1px solid #E0E0E0"
            p="20px"
            borderRadius={20}
            justify="center"
            align="center"
            flexDir="column"
          >
            <Icon as={BsTreeFill} color="accent" fontSize="3rem" />
            <Text textAlign="center" fontWeight="bold" color="#333" mt="10px">
              Gueirobal e Jabuticabeira
            </Text>
          </Flex>
        </SimpleGrid>

        <Text
          mt="80px"
          fontSize={dimensions.isDesktop ? "3.5rem" : "2rem"}
          fontWeight="bold"
          textAlign="center"
        >
          Imagens da Chácara
        </Text>
        <Text
          mt="10px"
          textAlign="center"
          color="#555"
          mb="20px"
          fontSize={dimensions.isDesktop ? "1.5rem" : "1.3rem"}
        >
          Clique nas imagens para ampliá-las
        </Text>
        <Flex
          flexDir="column"
          mx="auto"
          mb="60px"
          w="100%"
          px="20px"
          overflowX="scroll"
        >
          <ImageList />
        </Flex>

        <Text
          mt="10px"
          textAlign="center"
          color="#333"
          fontSize={dimensions.isDesktop ? "2rem" : "1.3rem"}
        >
          Essa propriedade está sendo vendida por apenas
        </Text>
        <Text
          fontWeight="bold"
          mt="10px"
          textAlign="center"
          color="#333"
          mb="20px"
          fontSize={dimensions.isDesktop ? "3.5rem" : "2.5rem"}
        >
          R$ 2.900.000,00
        </Text>
        <Flex px="20px" w="100%">
          {dimensions.isMobile ? (
            <Button
              mb="80px"
              onClick={() => {
                router.push("https://wa.me/5562981268480");
              }}
              maxW="sm"
              px="20px"
              w="100%"
              size={dimensions.isDesktop ? "md" : "sm"}
              fontSize={dimensions.isDesktop ? "md" : "sm"}
            >
              Entre em contato
            </Button>
          ) : (
            <Button
              mb="80px"
              onClick={() => {
                router.push("https://wa.me/5562981268480");
              }}
              px="20px"
              mx="auto"
              w="100%"
              maxW="sm"
              size={dimensions.isDesktop ? "md" : "sm"}
              fontSize={dimensions.isDesktop ? "md" : "sm"}
            >
              Entre em contato com o proprietário
            </Button>
          )}
        </Flex>
        <Flex w="100%" borderTop="1px solid #EEE" align="center" py="20px">
          <Text color="#555" w="100%" textAlign="center" fontSize="1.2rem">
            Lélia Patricia | (62) 98126-8480 |{" "}
            <span style={{ fontWeight: "bold" }}>CRECI 26.845</span>
          </Text>
        </Flex>
      </Flex>
      <Flex
        position="fixed"
        bottom="20px"
        right="20px"
        bg="#319795"
        borderRadius={50}
        w="50px"
        h="50px"
        justify="center"
        align="center"
        cursor="pointer"
        onClick={() => {
          router.push("https://wa.me/5562981268480");
        }}
      >
        <Icon as={BsWhatsapp} color="#FFF" />
      </Flex>
      <Modal
        isOpen={activeImage !== ""}
        onClose={() => {
          setActiveImage("");
        }}
        size="3xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton
            mt="5px"
            borderRadius={10}
            border="1px solid #CCC"
            bg="#FFF"
          />
          <ModalBody mt="20px" p="40px">
            <Image
              w={dimensions.isDesktop ? "70vw" : "100%"}
              h="70vh"
              objectFit="cover"
              borderRadius={20}
              src={activeImage}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
