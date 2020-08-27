
package com.baroservice.ws;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;
import java.util.ArrayList;
import java.util.List;


/**
 * <p>ArrayOfFaxMessageEx complex type�� ���� Java Ŭ�����Դϴ�.
 * 
 * <p>���� ��Ű�� ������ �� Ŭ������ ���ԵǴ� �ʿ��� �������� �����մϴ�.
 * 
 * <pre>
 * &lt;complexType name="ArrayOfFaxMessageEx"&gt;
 *   &lt;complexContent&gt;
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType"&gt;
 *       &lt;sequence&gt;
 *         &lt;element name="FaxMessageEx" type="{http://ws.baroservice.com/}FaxMessageEx" maxOccurs="unbounded" minOccurs="0"/&gt;
 *       &lt;/sequence&gt;
 *     &lt;/restriction&gt;
 *   &lt;/complexContent&gt;
 * &lt;/complexType&gt;
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "ArrayOfFaxMessageEx", propOrder = {
    "faxMessageEx"
})
public class ArrayOfFaxMessageEx {

    @XmlElement(name = "FaxMessageEx", nillable = true)
    protected List<FaxMessageEx> faxMessageEx;

    /**
     * Gets the value of the faxMessageEx property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the faxMessageEx property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getFaxMessageEx().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link FaxMessageEx }
     * 
     * 
     */
    public List<FaxMessageEx> getFaxMessageEx() {
        if (faxMessageEx == null) {
            faxMessageEx = new ArrayList<FaxMessageEx>();
        }
        return this.faxMessageEx;
    }

}
