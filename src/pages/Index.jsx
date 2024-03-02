import { Box, Flex, Text, Heading, Button, VStack, Container, Spacer, Link, Image, SimpleGrid } from "@chakra-ui/react";
import { FaPlus, FaRocket, FaLightbulb, FaHeart } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation */}
      <Flex as="nav" p={4} bg="teal.500" color="white" justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">
          Demo Site
        </Heading>
        <Button leftIcon={<FaPlus />} variant="solid" bg="teal.700" _hover={{ bg: "teal.600" }}>
          Sign Up
        </Button>
      </Flex>

      {/* Hero Section */}
      <Container maxW="container.lg" centerContent py={10}>
        <VStack spacing={6}>
          <Heading as="h2" size="2xl">
            Welcome to the Demo
          </Heading>
          <Text fontSize="xl" textAlign="center">
            Experience the best of Chakra UI with this simple demo page.
          </Text>
          <Button size="lg" colorScheme="teal" rightIcon={<FaRocket />}>
            Get Started
          </Button>
          <Image src="https://images.unsplash.com/photo-1683009427590-dd987135e66c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MXwxfHNlYXJjaHwxfHxsYW5kc2NhcGV8ZW58MHx8fHwxNzA5NDIyNDM3fDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" />
        </VStack>
      </Container>

      {/* Features Section */}
      <Box bg="gray.100" py={10}>
        <Container maxW="container.lg">
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Feature icon={FaLightbulb} title="Innovative Ideas" description="Bringing the best and brightest ideas to life." />
            <Feature icon={FaRocket} title="Rocket Speed" description="High performance and speed in every line of code." />
            <Feature icon={FaHeart} title="Made with Love" description="Crafted with attention and care for our users." />
          </SimpleGrid>
        </Container>
      </Box>

      {/* Footer */}
      <Flex as="footer" p={4} bg="teal.500" color="white" justifyContent="center">
        <Text>&copy; {new Date().getFullYear()} Demo Site. All rights reserved.</Text>
      </Flex>
    </Box>
  );
};

const Feature = ({ icon: Icon, title, description }) => (
  <VStack spacing={4} textAlign="center">
    <Icon size="3em" />
    <Heading as="h3" size="lg">
      {title}
    </Heading>
    <Text>{description}</Text>
  </VStack>
);

export default Index;
