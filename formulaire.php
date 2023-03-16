<?php
$mysqli  = new Mysqli("localhost", "root", "", "application");
if($_POST)
{
    $result = $mysqli ->query("INSERT INTO commentaies (appAjouter , email) VALUES ('$_POST[appAjouter]', '$_POST[email]')");
    echo '<div style="background: green; padding: 5px;">merci pour votre commentaire on va l\'ajouter le plus tot possible</div>';
}
?>
 
<form method="post">
    <center>
    
    <label for="prenom">logiciel pour ajouter</label><br>
    <input type="text" name="appAjouter" placeholder="logiciel non trouver" id="appAjouter" required=""><br><br>
    <label for="prenom">email</label><br>
    <input type="text" name="email" placeholder="email" id="email" required=""><br><br>
    <input type="submit"><br><br>
</center>
   
</form>
