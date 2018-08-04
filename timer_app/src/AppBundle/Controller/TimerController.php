<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Booking;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Serializer\Encoder\JsonEncode;


class TimerController extends Controller
{
    /**
     * @Route("/data2/{name}", name="timer_data")
     */
    public function dataAction($name)
    {
        return new JsonResponse([
            'name' => $name,
        ]);
    }

    /**
     * @Route("/delete/{name}", name="delete_data")
     */
    public function deleteAction(Request $request ,$name)
    {
        $id = $request -> query -> get('id');
        $date = $request -> query -> get('date');
        return new JsonResponse([
            'name' => $name,
            'id' => $id,
            'date' => $date
        ]);
    }

    /**
     * @Route("/savebooking", name="save_data")
     * Method("POST")
     */
    public function saveAction(Request $request)
    {
        if (0 === strpos($request->headers->get('Content-Type'), 'application/json')) {
            $data = json_decode($request->getContent(), true);
            $request->request->replace(is_array($data) ? $data : array());
        }
        $booking = new Booking();
        $booking->setDate($request->request->get("date"));
        $booking->setTime($request->request->get("time"));
        $booking->setDescription($request->request->get("description"));

        $em = $this->getDoctrine()->getManager();
        $em->persist($booking);
        $em->flush();
        return new JsonResponse([
            'state' => true,
            'msg'=> "data saved"
        ]);
    }

    /**
     * @Route("/getbookings", name="get_data")
     * Method({"GET","POST"})
     */
    public function getAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $bookRepo = $em->getRepository('AppBundle:Booking');
        $book = $bookRepo->findAll();
        $bookings = array();
        foreach ($book as $bk){
            $booking = (Object)[
                'id' =>$bk->getId(),
                'date' => $bk->getDate(),
                'time' => $bk->getTime(),
                'description' => $bk->getDescription()
                ];
            array_push($bookings, $booking);
        }
        return new JsonResponse([
            'state' => true,
            'bookings' => $bookings
        ]);
    }
}
