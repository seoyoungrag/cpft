
package com.baroservice.ws;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;
import java.util.ArrayList;
import java.util.List;


/**
 * <p>ArrayOfCardLogEx complex type�� ���� Java Ŭ�����Դϴ�.
 * 
 * <p>���� ��Ű�� ������ �� Ŭ������ ���ԵǴ� �ʿ��� �������� �����մϴ�.
 * 
 * <pre>
 * &lt;complexType name="ArrayOfCardLogEx"&gt;
 *   &lt;complexContent&gt;
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType"&gt;
 *       &lt;sequence&gt;
 *         &lt;element name="CardLogEx" type="{http://ws.baroservice.com/}CardLogEx" maxOccurs="unbounded" minOccurs="0"/&gt;
 *       &lt;/sequence&gt;
 *     &lt;/restriction&gt;
 *   &lt;/complexContent&gt;
 * &lt;/complexType&gt;
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "ArrayOfCardLogEx", propOrder = {
    "cardLogEx"
})
public class ArrayOfCardLogEx {

    @XmlElement(name = "CardLogEx", nillable = true)
    protected List<CardLogEx> cardLogEx;

    /**
     * Gets the value of the cardLogEx property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the cardLogEx property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getCardLogEx().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link CardLogEx }
     * 
     * 
     */
    public List<CardLogEx> getCardLogEx() {
        if (cardLogEx == null) {
            cardLogEx = new ArrayList<CardLogEx>();
        }
        return this.cardLogEx;
    }

}
