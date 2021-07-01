<?php

namespace App\Controller;

use App\Entity\Cash;
use App\Entity\Cheque;
use App\Form\CashType;
use App\Repository\CashRepository;
use App\Repository\ChequeRepository;
use App\Repository\TranfertRepository;
use Doctrine\ORM\EntityManagerInterface;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ComptaController extends AbstractController
{
    /**
     * @Route("/compta", name="compta")
     */
    public function index(): Response
    {
        return $this->render('compta/index.html.twig');
    }


    /**
     * @Route("/cash", name="cash")
     */
    public function cash(CashRepository $cashRepository, PaginatorInterface $paginatorInterface, Request $request, TranfertRepository $tranfertRepository): Response
    {

        $cashs = $paginatorInterface->paginate(
            $cashRepository->findAllPagination(),
            $request->query->getInt('page', 1), /*page number*/
            8 /*limit par page*/
        );
        return $this->render('compta/cash.html.twig', [
           'cashs' => $cashs
        ]);
    }

     /**
     * @Route("/deposit", name="deposit")
     */
    public function depositCash(Request $request, EntityManagerInterface $entityManager, CashRepository $cashRepository): Response
    {
        $cash = new Cash();
        $form = $this->createForm(CashType::class, $cash);

        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid())
        {

         $total = $cashRepository->selectLastTotal();
         $cash->setDate(new \DateTime);
         $cash->setAmountIn(0);
         $cash->setTotal($total['total'] - $cash->getAmountOut());
         $entityManager->persist($cash);
         $entityManager->flush();
         $this->addFlash('success', 'Le dépot a bien été enregistré');

         return $this->redirectToRoute('cash');
        }

        return $this->render('compta/deposit.html.twig', [
           'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="cash_delete", methods={"DELETE"})
     */
    public function deleteCash(Request $request, Cash $cash): Response
    {
        if ($this->isCsrfTokenValid('delete'.$cash->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($cash);
            $entityManager->flush();
        }

        return $this->redirectToRoute('cash');
    }

     /**
     * @Route("/cheque", name="cheque")
     */
    public function cheque(ChequeRepository $chequeRepository, Request $request, PaginatorInterface $paginatorInterface): Response
    {
        $cheques = $paginatorInterface->paginate(
            $chequeRepository->findAllPagination(),
            $request->query->getInt('page', 1), /*page number*/
            8 /*limit par page*/
        );

        return $this->render('compta/cheque.html.twig', [
            'cheques' => $cheques
        ]);
    }

    /**
     * @Route("/cheque/{id}", name="cheque_delete", methods={"DELETE"})
     */
    public function deleteCheque(Request $request, Cheque $cheque): Response
    {
        if ($this->isCsrfTokenValid('delete'.$cheque->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($cheque);
            $entityManager->flush();
        }

        return $this->redirectToRoute('cheque');
    }

    
}
