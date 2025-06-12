import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Heading,
  VStack,
  Text,
  Flex,
} from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import { ChevronLeftIcon, CloseIcon } from '@chakra-ui/icons';


const CreateProfile = () => {
  const router = useRouter();

  const initialValues = {
    name: '',
    city: '',
    degree: '',
    speciality: '',
    year: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    city: Yup.string().required('City is required'),
    degree: Yup.string().required('Degree is required'),
    speciality: Yup.string().required('Speciality is required'),
    year: Yup.string()
      .matches(/^\d{4}$/, 'Enter a valid year')
      .required('Year of completion is required'),
  });

  const handleSubmit = (values, actions) => {
    setTimeout(() => {
      console.log('Form submitted:', values);
      localStorage.setItem('profile', JSON.stringify(values));
      actions.setSubmitting(false);
      router.push('/');
    }, 1000);
  };

  return (
   <Box minH={{ base: "120vh", md: "100vh" }} display="flex" alignItems="center" justifyContent="center">
  <Box
    position="relative"
    maxW={{ base: "300px", md: "800px" }}
    w="full"
    p={{ base: "30px", md: "100px" }}
    borderRadius="md"
    bg="white"
    boxShadow="lg"
  >
    <Flex justify="space-between" align="center" mb={4}>
      <Button
        variant="ghost"
        leftIcon={<ChevronLeftIcon />}
        onClick={() => router.push('/')}
        size="3xl"
      >
      </Button>

      <Button
        variant="ghost"
        onClick={() => router.push('/')}
        size="sm"
      >
        <CloseIcon boxSize={3} />
      </Button>
    </Flex>

  
    <Heading mb={1} fontSize={{ base: "lg", md: "2xl" }} textAlign="center">
      Welcome to Medflix
    </Heading>
    <Text mb={4} fontSize={{ base: "sm", md: "lg" }} textAlign="center" color="gray.600">
      Create your account. This information will appear on your profile and certificates
    </Text>

  
   <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {(formik) => (
            <Form>
              <VStack spacing={4}>
                <Field name="name">
                  {({ field }) => (
                    <FormControl isRequired>
                      <Input {...field} placeholder="Name" />
                    </FormControl>
                  )}
                </Field>

                <Field name="city" >
                  {({ field }) => (
                    <FormControl isRequired>
                      <Select {...field} placeholder="Current City">
                        <option value="Delhi">Delhi</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Bangalore">Bangalore</option>
                        <option value="Other">Other</option>
                      </Select>
                    </FormControl>
                  )}
                </Field>

                <Box bg="#F1FAFF" w="100%" p={4} borderRadius="md">
                  <Text mb={2} fontWeight="bold">Your most recent qualification</Text>

                  <VStack spacing={3}>
                    <Flex gap={4} direction={{ base: 'row', md: 'row' }} w="100%">
  <Field name="degree">
    {({ field }) => (
      <FormControl isRequired flex="1">
        <Select {...field} placeholder="Degree" >
          <option value="BAMS">BAMS</option>
          <option value="BDS">BDS</option>
          <option value="BHMS">BHMS</option>
          <option value="BPT">BPT</option>
          <option value="BUMS">BUMS</option>
          <option value="DM">DM</option>
          <option value="DNB">DNB</option>
          <option value="DrNB">DrNB</option>
          <option value="FNB">FNB</option>
          <option value="MBBS">MBBS</option>
          <option value="MCh">MCh</option>
          <option value="MD">MD</option>
          <option value="MDS">MDS</option>
          <option value="MS">MS</option>
        </Select>
      </FormControl>
    )}
  </Field>

  <Field name="speciality">
    {({ field }) => (
      <FormControl isRequired flex="1">
        <Select {...field} placeholder="Speciality">
          <option value="Cardiology">Cardiology</option>
          <option value="Neurology">Neurology</option>
          <option value="Orthopaedics">Orthopaedics</option>
          <option value="General Medicine">General Medicine</option>
        </Select>
      </FormControl>
    )}
  </Field>
</Flex>


                    <Field name="year">
                      {({ field }) => (
                        <FormControl isRequired>
                          <Input {...field} placeholder="Year of Completion" />
                        </FormControl>
                      )}
                    </Field>
                  </VStack>
                </Box>

                <Button type="submit" isLoading={formik.isSubmitting} width="full" bg="#0E5674" color="white">
                  Create Profile
                </Button>
              </VStack>
            </Form>
          )}
        </Formik>
  </Box>
</Box>

   
  );
};

export default CreateProfile;
