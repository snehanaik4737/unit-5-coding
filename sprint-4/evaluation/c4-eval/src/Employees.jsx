import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Button,
  TableCaption,
  TableContainer,
  Box,
  Link,
  useDisclosure,
  FormControl,
  Input,
  FormLabel,
} from "@chakra-ui/react";

import { Link as RouterLink } from "react-router-dom";
import { deleteEmployee, fetchEmployee } from "./Redux/employee/action";
import { InitialFocus } from "./InitialFocus";
import { Delete } from "./Delete";
export const Employees = () => {
  const employee = useSelector((store) => store.employee.employee);
  console.log(employee, "emply");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEmployee());
  }, [dispatch]);



  // const handleDelete=(id)=>{
  //  dispatch(deleteEmployee(id))
  // }
  return (
    <Box>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>EMPLOYEE NAME</Th>
              <Th>COMPANY NAME</Th>
              <Th isNumeric>CTC</Th>
              <Th>VIEW DETAILS</Th>
              <Th>DELETE</Th>
              <Th> EDIT</Th>
            </Tr>
          </Thead>
          {employee?.map((item) => (
            <Tbody key={item.id}>
              <Tr>
                <Td>{item.id}</Td>
                <Td>{item.employee_name}</Td>
                <Td>{item.company_name}</Td>
                <Td>{item.ctc}</Td>
                <Td>
                  <Link as={RouterLink} to={`/employee/${item.id}`}>
                    <Button size="md">VIEW</Button>
                  </Link>
                </Td>
                <Td>
                  <Delete employee={item}/>
                  {/* <Button onClick={()=>handleDelete(item.id)}>Delete</Button> */}
                </Td>
                <Td>
                  <Button>Edit</Button>
                </Td>
              </Tr>
            </Tbody>
          ))}
        </Table>
      </TableContainer>

      <InitialFocus></InitialFocus>
    </Box>
  );
};
