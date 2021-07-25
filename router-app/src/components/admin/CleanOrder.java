package components.admin;

import java.util.*;

public class CleanOrder {

    public static void main(String[] args) {

        Scanner numberz = new Scanner(System.in);
        Scanner letterz = new Scanner(System.in);

        List<ClientDetails> listServices = new ArrayList<>();

        String locatNumber = "";
        String deliveryLocation = "";

        String permissionChoice = "";

        while (!permissionChoice.equals("0")) {

            System.out.println("Login as:\n1. client\n2. Admin\n0. To quit\n");
            System.out.print("Choose:");
            permissionChoice = letterz.nextLine();

            switch (permissionChoice) {
                case "1":
                    System.out.println("You are in client mode\n");

                    System.out.print("Client Name:     " + "\t" + "\t");
                    String nameClient = letterz.nextLine();

                    System.out.print("Number of items we will clean for you:" + "\t");
                    int cleanableItems = numberz.nextInt();

                    System.out.println("\nType the number corresponding to your location");
                    System.out.println("\n\t1. Nyarugenge\n\t2. Kicukiro\n\t3. Gasabo\n\t4. Kamonyi\n\t5. Bugesera");

                    System.out.print("Your location:" + "\t" + "\t" + "\t");
                    locatNumber = letterz.nextLine();

                    HashMap<String, String> locationStorage = new HashMap<>();

                    locationStorage.put("1", "Nyarugenge");
                    locationStorage.put("2", "Kicukiro");
                    locationStorage.put("3", "Gasabo");
                    locationStorage.put("4", "Kamonyi");
                    locationStorage.put("5", "Bugesera");

                    deliveryLocation = locationStorage.get(locatNumber);

                    listServices.add(new ClientDetails(nameClient, cleanableItems, deliveryLocation));

                    System.out.println("\nThank you for working with us!!! We will reach you soon");

                    break;

                case "2":
                    System.out.println("You are in Admin mode");
                    String adminchoice = "";
                    while (!adminchoice.equals("0")) {
                        System.out.println(
                                "Functions:\n1. Pending services\n2. Best way\n3. Search People in Certain area\n0. To quit");
                        adminchoice = letterz.nextLine();
                        switch (adminchoice) {
                            case "1":
                                display(listServices);
                                break;
                            case "2":
                                Collections.sort(listServices, new NameSortA());
                                display(listServices);
                                break;
                            case "3":
                                System.out.print("Type  Location to search:");

                                // Scanner for the id you want to scan
                                String locationSearch = letterz.nextLine();
                                int indx = -5;

                                List<ClientDetails> result = new ArrayList<>();

                                /*
                                 * for (int i=0; i<listServices.size(); i++) {
                                 * if(listServices.get(i).clientName==locationSearch) { indx = i; name =
                                 * listServices.get(i).clientLocation; usersInLoc = {}; } if(indx>=0) {
                                 * System.out.println("Found on index: " +indx+ "\n with name: " +name+
                                 * "\n Written by: " +client1); } }
                                 */
                                for (ClientDetails lists : listServices) {

                                    if (lists.clientLocation.equals(locationSearch)) {
                                        System.out.print(lists.toString() + "If");

                                        result.add(lists);
                                    }
                                }
                                System.out.println(result.toString() + "results");
                                display(result);

                                break;
                            case "4":

                                break;
                            case "0":
                                break;

                        }

                    }

                    break;

                default:
                    System.out.println("Input the valid number");

            }

        }

    }

    public static void display(List<ClientDetails> myList) {
        for (ClientDetails st : myList) {
            System.out.println(st.clientName + "\t" + st.clientLocation + "\t" + st.itemNumber);
        }
    }

}

class ClientDetails {
    String clientName;
    int itemNumber;
    String clientLocation;

    ClientDetails(String clientName, int itemNumber, String clientLocation) {
        this.clientName = clientName;
        this.itemNumber = itemNumber;
        this.clientLocation = clientLocation;
    }
}

class NameSortA implements Comparator<ClientDetails> {
    public int compare(ClientDetails b1, ClientDetails b2) {
        return b1.clientName.compareTo(b2.clientName);
    }
}